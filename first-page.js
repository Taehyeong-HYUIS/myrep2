import Link from 'next/link';

export default function FirstPage() {
  return (
    <>
    
      <h1>ABOUT ME</h1><h5>Taehyeong Kwon / 2023007629 / Information system</h5>
      <h1>|</h1>
      <h3>1. my history </h3>
      <h4><ul>
        <li>2003.2.8, My birth</li>
        <li> </li>
        <li>2022, Konkuk Univ. Department of Computer Science</li>
        <li> </li>
        <li>2023, Hanyang Univ. Department of Information System</li>
        </ul></h4>
        <h1>|</h1>
        <h3>2. like & hobby </h3>
        <h4><ul>
            <li>listening to songs</li>
            </ul></h4>
      <h8>
        <Link href="/">Thanks for reading!</Link>
      </h8>
    </>
  );
}