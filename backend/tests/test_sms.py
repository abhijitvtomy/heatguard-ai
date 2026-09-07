import httpx

key = "53aj7BdGfVxY1bhNnPl4CwoXie2FWLsRKDOtAzuvpIS86MkyQULcaEZVqm1kX7IowPY8bp0jMBhKFOix"

# Test OTP route
try:
    payload = {
        "route": "otp",
        "variables_values": "34C",
        "numbers": "9876543210"
    }
    res = httpx.post(
        "https://www.fast2sms.com/dev/bulkV2",
        headers={"authorization": key, "Content-Type": "application/json"},
        json=payload,
        timeout=10.0
    )
    print("OTP Status Code:", res.status_code)
    print("OTP Response:", res.text)
except Exception as e:
    print("OTP Error:", e)
