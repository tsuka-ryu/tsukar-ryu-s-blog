import { Gimmick } from "./page.client";

export default function Page() {
  return (
    <main className="relative flex flex-col flex-1">
      <Gimmick />
      <div className="z-0 mx-auto max-w-page w-full px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">About me</h1>
        <section className="max-w-2xl space-y-4">
          <p>モダンなWeb技術が好きなフロントエンドエンジニアです。</p>
          <p>
            最新のエコシステム動向から、マネジメントを含めた広義のエンジニアリングまで、幅広く関心を持っています。RustやHaskellなどの言語にも興味があります。
          </p>
        </section>
      </div>
    </main>
  );
}
