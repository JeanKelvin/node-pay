const Prometheus = require('prom-client');

module.exports = function (app) {
  const metricsInterval = Prometheus.collectDefaultMetrics()
    app.get('/metrics', (req, res) => {
      res.set('Content-Type', Prometheus.register.contentType)
      res.end(Prometheus.register.metrics())
  })
}
