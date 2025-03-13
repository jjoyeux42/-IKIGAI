import { NextPage } from 'next';

interface ErrorProps {
  statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-[#3AD278]">
          {statusCode
            ? `Une erreur ${statusCode} s'est produite`
            : 'Une erreur s\'est produite'}
        </h1>
        <p className="mb-6 text-gray-600">
          Nous sommes désolés pour ce désagrément.
        </p>
        <a
          href="/"
          className="rounded-2xl border-b-4 border-[#3AD278] bg-[#41D185] px-6 py-3 font-bold text-white hover:brightness-110"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;