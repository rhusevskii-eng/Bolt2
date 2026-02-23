import { useEffect } from 'react';
import { trackPurchase } from '../utils/metaPixel';
import { trackPurchase as trackGAPurchase } from '../utils/googleAnalytics';

export default function ThankYou() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      trackPurchase(37, 'EUR', sessionId);

      trackGAPurchase(
        sessionId,
        37,
        'EUR',
        [{
          item_id: 'real-estate-mastery',
          item_name: 'Real Estate Mastery Course',
          price: 37,
          quantity: 1
        }]
      );
    }
  }, []);

  const handleViberClick = () => {
    window.location.href = 'https://invite.viber.com/?g2=AQBDgnWTYAtRTlYayRucgZRt1%2FgCLovD8h5%2FN1d1EYEN0Fxrrp5K%2FcJ7kNkm0n%2BV';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Благодарим за поръчката ти!
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Какво следва? Кликни на бутона долу, за да се включиш във специалната ни вайбър група за събитието, където ще получаваш допълнителна информация.
            </p>
          </div>

          <button
            onClick={handleViberClick}
            className="inline-flex items-center gap-3 bg-[#7360f2] hover:bg-[#5f4dd4] text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.617 6.238 20.307h.005l-.004 2.274s-.037.85.524 1.025c.679.21 1.076-.43 1.723-1.12.356-.38.848-.95 1.221-1.384 3.365.283 5.954-.364 6.25-.46.69-.22 4.601-.712 5.244-5.81.662-5.24-.315-8.556-2.396-10.08C16.85.507 13.727.027 11.4 0zm.058 1.693c2.086.02 4.961.46 6.754 2.205 1.76 1.39 2.476 4.12 1.873 8.682-.58 4.38-3.906 4.55-4.482 4.733-.247.08-2.557.673-5.512.44 0 0-2.181 2.626-2.852 3.297-.107.107-.23.156-.323.14-.13-.022-.166-.163-.165-.36l.02-3.718c-4.87-1.416-4.573-6.32-4.516-8.97.057-2.65.58-4.813 2.04-6.35 1.907-1.77 5.387-2.118 7.163-2.1zm.36 2.437a.4.4 0 00-.396.399.4.4 0 00.396.399c2.564 0 4.65 2.077 4.65 4.64 0 .22.177.398.398.398a.4.4 0 00.398-.398c0-3.044-2.407-5.438-5.447-5.438zm-4.636.693c-.254-.006-.49.064-.706.182l-.03.017a3.57 3.57 0 00-.695.525c-.362.35-.608.8-.715 1.076-.006.016-.01.031-.015.047a5.26 5.26 0 00-.303 1.233c-.043.478.018 1.114.295 1.848.467 1.234 1.444 2.633 2.892 4.081 1.448 1.448 2.847 2.425 4.081 2.892.734.277 1.37.338 1.848.295a5.26 5.26 0 001.233-.303.048.048 0 00.047-.015c.276-.107.726-.353 1.076-.715.194-.2.377-.424.525-.695l.017-.03c.238-.406.283-.84.124-1.229a6.37 6.37 0 00-.738-1.098l-.456-.538c-.36-.36-.804-.583-1.252-.583-.448 0-.892.223-1.252.583l-.625.625c-.338-.151-.704-.384-1.069-.692-.365-.308-.682-.667-.943-1.015l.625-.625c.36-.36.583-.804.583-1.252 0-.448-.223-.892-.583-1.252l-.538-.456a6.37 6.37 0 00-1.098-.738c-.203-.095-.41-.146-.614-.153zm.012.8c.138.005.276.038.408.104.331.166.693.412.993.657l.538.456c.22.22.323.423.323.584 0 .161-.103.364-.323.584l-.913.913a.4.4 0 00-.063.482c.302.537.686 1.021 1.142 1.407.456.386.961.683 1.458.933a.4.4 0 00.482-.063l.913-.913c.22-.22.423-.323.584-.323.161 0 .364.103.584.323l.456.538c.245.3.491.662.657.993.124.247.17.46.096.62l-.014.023c-.122.197-.281.393-.443.555-.275.275-.621.473-.834.555a4.45 4.45 0 01-1.013.247c-.36.034-.815-.012-1.388-.228-1.088-.41-2.356-1.297-3.685-2.626-1.329-1.329-2.216-2.597-2.626-3.685-.216-.573-.262-1.028-.228-1.388.034-.36.118-.695.247-1.013.082-.213.28-.559.555-.834.162-.162.358-.321.555-.443l.023-.014c.053-.028.11-.045.17-.05zm4.623.862a.4.4 0 00-.396.399.4.4 0 00.396.399 3.84 3.84 0 013.84 3.839.4.4 0 00.398.399.4.4 0 00.399-.399 4.64 4.64 0 00-4.637-4.637zm0 1.594a.4.4 0 00-.396.399.4.4 0 00.396.398 2.25 2.25 0 012.246 2.246.4.4 0 00.398.399.4.4 0 00.399-.399 3.05 3.05 0 00-3.043-3.043z"/>
            </svg>
            Присъедини се към Viber групата
          </button>
        </div>
      </div>
    </div>
  );
}
