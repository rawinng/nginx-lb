# TRY : nginx LB

With node & express framework, we can create a little cluster for a little stability 

## Key learning point

### Setup

Setup nginx load balancer by following configuration in `/etc/nginx/nginx.conf`

```nginx
upstream nginx_backend {
    server  app1:3000 fail_timeout=30s max_fails=2;
    server  app2:3000 fail_timeout=30s max_fails=2;
    server  app3:3000 fail_timeout=30s max_fails=2;
}

server {
    resolver 127.0.0.11 valid=30s;

    location / {
        proxy_pass  http://nginx_backend;
    }
}
```

### Pro & Con

#### PRO
1. easy to setup
2. lightweight
3. start up quick


#### CON
1. can be slow
2. nginx free version is not good