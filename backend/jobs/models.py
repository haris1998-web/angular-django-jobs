from django.contrib.auth.models import User
from django.db import models


class Job(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_created=True, auto_now=True)
    updated_at = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __str__(self):
        return self.title


class Bid(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bid_text = models.TextField(blank=False, null=False)
    bid_price = models.IntegerField(default=5, null=False)
    created_at = models.DateTimeField(auto_created=True, auto_now=True)
    updated_at = models.DateTimeField(auto_created=True, auto_now_add=True)

    class Meta:
        # User and Job are unique together, avoids duplicate bidding.
        unique_together = ('job', 'user')

    def __str__(self):
        return str(self.job.id)
