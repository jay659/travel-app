import { type RouteConfig, index , route ,layout ,prefix } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [        
        route('/', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
    ]),
    
  
] satisfies RouteConfig;