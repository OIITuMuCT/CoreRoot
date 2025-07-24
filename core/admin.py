from django.contrib import admin

# Register your models here.
from core.user.models import User
from core.post.models import Post

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    fields = ['username', 'email', 'first_name', 'last_name']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    pass
