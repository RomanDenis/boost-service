import { redirect } from 'next/navigation';

// Redirects to the primary service page for this game
export default function Dota2Page() {
  redirect('/games/dota2/boost/rank');
}
