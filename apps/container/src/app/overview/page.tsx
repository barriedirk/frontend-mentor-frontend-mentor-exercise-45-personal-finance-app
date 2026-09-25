'use client';

import RemoteLoader from '@/components/RemoteLoader';

export default function Page() {
  return (
    <main>
      <h1>Overview</h1>
      <RemoteLoader remote="overview/App" />
    </main>
  );
}