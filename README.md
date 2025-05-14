# Sparkleklin - Cleaning Service Platform

A modern web application for managing cleaning service bookings and job applications built with Vue 3, Tailwind CSS, and Supabase.

## Features

- 📝 Contact Form Submissions
- 💼 Job Application Management
- 👤 Admin Dashboard
- 🔐 Authentication System
- 📱 Responsive Design
- 📊 Status Tracking
- 🎨 Modern UI/UX

## Tech Stack

- Vue 3 (Composition API)
- Tailwind CSS
- Supabase (Backend)
- Vue Router
- Iconify
- Vite

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v14.0.0 or higher)
- npm or yarn
- Git

## Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/radiant-o/sparkleklin.git
cd sparkleklin
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:

```env
VITE_APP_SUPABASE_URL=your_supabase_url
VITE_APP_SUPABASE_KEY=your_supabase_anon_key
```

## Database Setup

1. Create a new project in Supabase
2. Create the following tables:

### sparkleklinjobforms

```sql
create table sparkleklinjobforms (
  id bigint primary key generated always as identity,
  first_name text,
  last_name text,
  email text,
  phone text,
  dob date,
  streetaddress text,
  apartment text,
  city text,
  state text,
  zipcode text,
  dbscert text,
  cleaningexp text,
  workauthorised text,
  visatype text,
  drivinglicense text,
  availability text,
  resume_url text,
  status text default 'Pending',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone
);
```

### sparkleklincontactform

```sql
create table sparkleklincontactform (
  id bigint primary key generated always as identity,
  first_name text,
  last_name text,
  email text,
  phone text,
  cleaning_date date,
  service text,
  hours_per_visit text,
  frequency text,
  daysfrequency text,
  address text,
  address_line text,
  str_add text,
  city text,
  state text,
  country text,
  subject text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
sparkleklin/
├── src/
│   ├── components/     # Reusable components
│   ├── views/          # Page components
│   ├── layouts/        # Layout components
│   ├── composables/    # Composable functions
│   ├── router/         # Vue router configuration
│   └── assets/         # Static assets
├── public/            # Public static files
└── ...configuration files
```

## Key Components

- `AdminDashboard.vue`: Main dashboard for managing submissions
- `ContactUs.vue`: Contact form for service inquiries
- `JobApplication.vue`: Job application form
- Modal components for viewing details and updating status

## Authentication

The admin section requires authentication through Supabase. Ensure proper RLS policies are set up in your Supabase project.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Support

For support, email <support@sparkleklin.com> or raise an issue in the repository.
