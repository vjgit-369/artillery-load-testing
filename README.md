# CommitQuality Load Testing

This project contains load testing scenarios for the CommitQuality web application using Artillery.io.

## Project Structure

- `commitquality-loadtest.yml` - Artillery load test configuration
- `tests/commitquality/` - Playwright test files for reference
- `artillery-html-report.html` - Detailed test results report

## Test Scenarios

The load test simulates the following user flows:
1. Login
2. Add Product
3. View Products
4. Logout

## Load Test Phases

1. Warm up: 30s at 5 users/second
2. Ramp up: 60s ramping from 10 to 30 users/second
3. High load: 120s at 30 users/second
4. Peak load: 60s at 50 users/second

## Key Results

- Total Requests: 47,445
- Success Rate: 99.89%
- Average Request Rate: 183 req/sec
- Median Response Time: 73ms
- 95th Percentile: 247.2ms

## Running the Tests

1. Install dependencies:
```bash
npm install
```

2. Run the load test:
```bash
npm test
```

3. Run with output file:
```bash
npm run test:output
```

## Latest Test Results

Check `artillery-html-report.html` for detailed test results and analysis.
