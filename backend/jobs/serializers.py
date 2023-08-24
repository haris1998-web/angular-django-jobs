from rest_framework import serializers

from .models import Job, Bid


class JobSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%d-%m-%Y %H:%M:%S', required=False)
    updated_at = serializers.DateTimeField(format='%d-%m-%Y %H:%M:%S', required=False)
    user = serializers.CharField(required=False)

    class Meta:
        model = Job
        fields = '__all__'


class InsertJobSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255, required=True)
    description = serializers.CharField(max_length=255, required=True)


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
