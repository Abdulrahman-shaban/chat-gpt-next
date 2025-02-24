import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <header>users main page</header>
      <section>
        <ul>
          <li>
            <Link href="/dashbord/users/1">user 1</Link>
          </li>
          <li>
            <Link href="/dashbord/users/2">user 2</Link>
          </li>
          <li>
            <Link href="/dashbord/users/3">user 3</Link>
          </li>
          <li>
            <Link href="/dashbord/users/4">user 4</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default page;
