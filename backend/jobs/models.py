from django.contrib.auth.models import User
from django.db import models


class Job(models.Model):
    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(blank=False, null=False)

    def __str__(self):
        return self.title


class Bid(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bid_text = models.TextField(blank=False, null=False)

    class Meta:
        # User and Job are unique together, avoids duplicate bidding.
        unique_together = ('job', 'user')

    def __str__(self):
        return str(self.job.id)
