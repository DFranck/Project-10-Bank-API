import "./index.scss";

export const Hero = () => {
  return (
    <div
      class="hero"
      style={{
        backgroundImage: 'url("./img/bank-tree.jpeg") ',
        backgroundPosition: "0 -50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section class="hero-content">
        <h2 class="sr-only">Promoted Content</h2>
        <p class="subtitle">No fees.</p>
        <p class="subtitle">No minimum deposit.</p>
        <p class="subtitle">High interest rates.</p>
        <p class="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};
