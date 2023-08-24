from rest_framework import serializers

from .models import Job, Bid


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class BidSerializer(serializers.ModelSerializer):
    user_info = serializers.SerializerMethodField()

    class Meta:
        model = Bid
        fields = '__all__'

    def get_user_info(self, bid):
        user = bid.user
        return {
            'id': user.id,
            'username': user.username,
            'email': user.email,
        }