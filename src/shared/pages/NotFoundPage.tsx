import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import animation404 from '@/assets/404Animation.lottie';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-svh flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full">
        <DotLottieReact
          src={animation404}
          loop
          autoplay
          className="w-full h-auto"
        />
      </div>
      
      <div className="text-center mt-6 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
          <Button 
            onClick={() => navigate('/', { replace: true })}
          >
            Back to Home
          </Button>
      </div>
    </div>
  );
}