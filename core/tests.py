from django.test import TestCase

# Create your tests here.
def add(a, b):
    return a + b

def test_sum():
    assert add(1, 2) == 3