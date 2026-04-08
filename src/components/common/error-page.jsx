import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { path } from "@/constants/path";
import ButtonExample from "@/components/ui/button-example";

export default function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-400 dark:text-gray-600">500</h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">
            {t("error.somethingWrong")}
          </h2>
        </div>
        
        <ButtonExample 
          onClick={() => navigate(path.Home)}
          variant="primary"
        >
          {t("error.goHome")}
        </ButtonExample>
      </div>
    </div>
  );
}