function valueButton(a)
{
    calculator.screen.value += a.value;
}

function clear()
{
    calculator.screen.value = null;
}

function Calculate()
{
    calculator.screen.value = eval( calculator.screen.value);
}