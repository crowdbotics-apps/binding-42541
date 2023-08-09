from rest_framework import serializers
from demo.models import Profile,Profile

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = "__all__"