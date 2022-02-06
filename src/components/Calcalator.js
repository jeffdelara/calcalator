import react, { useEffect, useState } from "react";

const Calcalator = () => {
  const [price, setPrice] = useState("");
  const [percentage, setPercentage] = useState("");
  const [retail, setRetail] = useState(0)

  useEffect(() => {
    const p = parseFloat(price)
    const percent = parseFloat(percentage) / 100
    const total = (p * percent) + p
    setRetail(total || 0)
  }, [price, percentage])

  return (
    <div className="container">
      <SupplierPrice price={price} setPrice={setPrice} />
      <ProfitPercentage percentage={percentage} setPercentage={setPercentage} />
      <Retail retail={retail} price={price} />
    </div>
  )
}

const Retail = (props) => {
  const {retail, price} = props

  return (
    <div className="retail">
      <label>Profit</label>
      <div>{retail - price}</div>
      <label>Price</label>
      <div>{retail}</div>
    </div>
  )
}

const SupplierPrice = (props) => {
  const { setPrice, price } = props

  const typingPrice = (e) => {
    e.preventDefault();
    const supplierPrice = e.target.value
    setPrice(supplierPrice)
  }

  return (
    <div>
      <label>Supplier Price</label>
      <input type="number" onChange={typingPrice} value={price} />
    </div>
  )
}

const ProfitPercentage = (props) => {
  const { percentage, setPercentage } = props

  const typingPercentage = (e) => {
    e.preventDefault();
    const percentage = e.target.value
    setPercentage(percentage)
  }

  return (
    <div>
    <label>Percent Profit</label>
    <input type="number" onChange={typingPercentage} value={percentage} />
    </div>
  )
}

export default Calcalator;
