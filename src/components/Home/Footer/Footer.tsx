function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-4">
      <aside>
        <p className="text-stone-700">
          Copyright © ${new Date().getFullYear()} - All right reserved by Gym
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
