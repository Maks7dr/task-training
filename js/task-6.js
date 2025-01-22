document
  .getElementById('calculateButton')
  .addEventListener('click', function () {
    const yuanToTengeRate = 74; // Текущий курс юаня к тенге
    const kaspiCommission = 0.12; // Комиссия Каспи банка
    const incomeTax = 0.03; // Подоходный налог
    const profitMargin = 0.3; // Чистая прибыль 30%
    const deliveryCostPerKg = 1700; // Доставка за 1000 грамм

    // Получение данных из формы
    const yuanPrice = parseFloat(document.getElementById('yuanPrice').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(yuanPrice) || isNaN(weight)) {
      alert('Пожалуйста, введите корректные данные.');
      return;
    }

    // Расчет себестоимости
    const costPriceInTenge = yuanPrice * yuanToTengeRate;
    const deliveryCost = (weight / 1000) * deliveryCostPerKg;
    const costPrice = costPriceInTenge + deliveryCost;

    // Итеративный расчет цены продажи
    let sellingPrice = costPrice / (1 - profitMargin); // Стартовая цена продажи
    let calculatedProfit = 0;
    let kaspiDeliveryCost = 0;
    let kaspiCommissionValue = 0;
    let incomeTaxValue = 0;

    while (true) {
      // Вычисляем налоги и комиссии от текущей цены продажи
      kaspiDeliveryCost =
        sellingPrice <= 5000 ? 0 : sellingPrice <= 15000 ? 799 : 1299;
      kaspiCommissionValue = sellingPrice * kaspiCommission;
      incomeTaxValue = sellingPrice * incomeTax;

      // Чистая прибыль
      calculatedProfit =
        sellingPrice -
        costPrice -
        kaspiDeliveryCost -
        kaspiCommissionValue -
        incomeTaxValue;

      if (calculatedProfit >= sellingPrice * profitMargin) {
        break; // Если прибыль соответствует 30%, выходим из цикла
      }

      // Увеличиваем цену продажи для корректировки
      sellingPrice += 1; // Увеличиваем на 1 тенге за итерацию
    }

    // Вывод результатов
    document.getElementById(
      'costPrice'
    ).textContent = `Себестоимость товара: ${costPrice.toFixed(2)} тг.`;
    document.getElementById(
      'kaspiCommission'
    ).textContent = `Комиссия Kaspi: ${kaspiCommissionValue.toFixed(2)} тг.`;
    document.getElementById(
      'kaspiDelivery'
    ).textContent = `Стоимость доставки Kaspi: ${kaspiDeliveryCost.toFixed(
      2
    )} тг.`;
    document.getElementById(
      'incomeTax'
    ).textContent = `Подоходный налог (3%): ${incomeTaxValue.toFixed(2)} тг.`;
    document.getElementById(
      'profit'
    ).textContent = `Чистая прибыль (30% от продажи): ${calculatedProfit.toFixed(
      2
    )} тг.`;
    document.getElementById(
      'sellingPrice'
    ).textContent = `Итоговая цена продажи: ${sellingPrice.toFixed(2)} тг.`;
  });
