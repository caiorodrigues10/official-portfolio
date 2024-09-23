import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="mb-4">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link href="/">
        <a className="text-blue-500 underline">Voltar para a página inicial</a>
      </Link>
    </div>
  );
}
