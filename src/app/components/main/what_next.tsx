export function WhatsNext() {
  return (
    <section className="px-6 pt-32 md:px-12 lg:px-24 text-center mx-auto">
      <div className="max-w-xl mx-auto">
        <h2 className="text-accent text-sm font-mono mb-4">{`04. What's Next?`}</h2>
        <h3 className="text-slate-300 text-3xl md:text-4xl font-bold mb-6">
          Get In Touch
        </h3>
        <p className="text-slate-400 mb-10 leading-relaxed">
          {`Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!`}
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors font-mono text-sm"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
