from rest_framework import serializers
from .models import Header, Footer

class HeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Header
        fields = ['id', 'user', 'video_path', 'created_at', 'updated_at', 'thumbnail']
        read_only_fields = ['thumbnail']  # Make 'thumbnail' field read-only

    def create(self, validated_data):
        # Create a new Header instance using the validated data.
        header_instance = Header.objects.create(**validated_data)
        return header_instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance


class FooterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Footer
        fields = ['id', 'user', 'video_path', 'created_at', 'updated_at', 'thumbnail']
        read_only_fields = ['thumbnail']  # Make 'thumbnail' field read-only

    def create(self, validated_data):
        # Create a new footer instance using the validated data.
        footer_instance = Footer.objects.create(**validated_data)
        return footer_instance

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance

