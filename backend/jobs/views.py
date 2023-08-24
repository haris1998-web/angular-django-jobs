from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, serializers
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Job, Bid
from .serializers import JobSerializer, BidSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]


class BidViewSet(viewsets.ModelViewSet):
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['GET'])
    def bids_for_job(self, request, pk=None):
        bids = self.queryset.filter(job=pk)
        serializer = self.serializer_class(bids, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['POST'])
    def create_bid(self, request, pk=None):
        user = self.request.user
        job = get_object_or_404(Job, pk=pk)
        bid_text = request.data.get('bid_text')

        existing_bid = Bid.objects.filter(job=job, user=user).exists()
        if existing_bid:
            return Response({'error': 'You have already placed a bid on this job.'}, status=status.HTTP_400_BAD_REQUEST)

        bid = Bid.objects.create(job=job, user=user, bid_text=bid_text)
        serializer = self.serializer_class(bid)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
