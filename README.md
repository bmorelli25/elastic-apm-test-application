# elastic-apm-test-application
Basic express application with four available routes to test Elastic's APM solution.

### Available routes:
* `/error` - custom error creation
* `/metadata` - errors with user data and custom metrics
* `/addtags` - add tags to errors
* `/delayresponse` - this page only responds after 1500 milliseconds
* `404` - takes you to a nonexistant route
