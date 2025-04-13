import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [timeframe, setTimeframe] = useState('1d');

  const cryptoList = [
    { symbol: 'BTC', name: 'Bitcoin', price: 68423.45, change: 2.34 },
    { symbol: 'ETH', name: 'Ethereum', price: 3245.67, change: 1.23 },
    { symbol: 'BNB', name: 'Binance Coin', price: 543.21, change: -0.45 },
    { symbol: 'SOL', name: 'Solana', price: 143.87, change: 5.67 },
    { symbol: 'ADA', name: 'Cardano', price: 0.58, change: -1.24 },
  ];

  const timeframes = ['5m', '15m', '1h', '4h', '1d', '1w', '1M'];

  const indicators = [
    'RSI', 'MACD', 'Bollinger Bands', 'Moving Average', 'Stochastic', 
    'Ichimoku Cloud', 'Volume', 'OBV', 'ATR', 'Fibonacci'
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>OSA2002 - منصة تحليل العملات الرقمية</h1>
        <div className="user-controls">
          <button>تسجيل الدخول</button>
          <button>إنشاء حساب</button>
        </div>
      </header>

      <div className="main-container">
        <div className="sidebar">
          <h3>قائمة العملات</h3>
          <div className="crypto-list">
            {cryptoList.map(crypto => (
              <div 
                key={crypto.symbol} 
                className={`crypto-item ${selectedCrypto === crypto.symbol ? 'selected' : ''}`}
                onClick={() => setSelectedCrypto(crypto.symbol)}
              >
                <div className="crypto-symbol">{crypto.symbol}</div>
                <div className="crypto-name">{crypto.name}</div>
                <div className="crypto-price">${crypto.price.toLocaleString()}</div>
                <div className={`crypto-change ${crypto.change >= 0 ? 'positive' : 'negative'}`}>
                  {crypto.change > 0 ? '+' : ''}{crypto.change}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <div className="selected-crypto">
              <h2>{cryptoList.find(c => c.symbol === selectedCrypto)?.name} ({selectedCrypto})</h2>
              <div className="crypto-price-large">
                ${cryptoList.find(c => c.symbol === selectedCrypto)?.price.toLocaleString()}
                <span className={`crypto-change-large ${cryptoList.find(c => c.symbol === selectedCrypto)?.change >= 0 ? 'positive' : 'negative'}`}>
                  {cryptoList.find(c => c.symbol === selectedCrypto)?.change > 0 ? '+' : ''}
                  {cryptoList.find(c => c.symbol === selectedCrypto)?.change}%
                </span>
              </div>
            </div>
            <div className="timeframe-selector">
              {timeframes.map(tf => (
                <button 
                  key={tf} 
                  className={timeframe === tf ? 'active' : ''}
                  onClick={() => setTimeframe(tf)}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          
          <div className="chart-placeholder">
            <div className="chart-message">
              <h3>الرسم البياني للعملة {selectedCrypto}</h3>
              <p>الإطار الزمني: {timeframe}</p>
              <p>سيتم عرض الرسم البياني المتقدم هنا</p>
            </div>
          </div>

          <div className="indicators-panel">
            <h3>المؤشرات الفنية</h3>
            <div className="indicators-list">
              {indicators.map(indicator => (
                <div key={indicator} className="indicator-item">
                  <input type="checkbox" id={indicator} />
                  <label htmlFor={indicator}>{indicator}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="analysis-panel">
          <h3>تحليل البلوكتشين</h3>
          <div className="analysis-item">
            <h4>تدفق الأموال</h4>
            <p>تدفق صافي: <span className="positive">+1,245 BTC</span></p>
          </div>
          <div className="analysis-item">
            <h4>نشاط المحافظ الكبيرة</h4>
            <p>تراكم: <span className="positive">نشط</span></p>
          </div>
          <div className="analysis-item">
            <h4>مؤشر الخوف والجشع</h4>
            <p>القيمة الحالية: <span>75</span> (جشع)</p>
          </div>
          
          <h3>التنبؤ بالذكاء الاصطناعي</h3>
          <div className="ai-prediction">
            <p>التوقع على المدى القصير: <span className="positive">صعودي</span></p>
            <p>نسبة الثقة: 78%</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>OSA2002 - منصة تحليل العملات الرقمية المتقدمة © 2025</p>
      </footer>
    </div>
  );
}

export default App;
