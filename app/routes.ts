import { type RouteConfig, index , route ,layout ,prefix } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [        
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
    ]),
    route('/', 'routes/admin/app.tsx')
  
] satisfies RouteConfig;