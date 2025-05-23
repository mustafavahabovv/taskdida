import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk, postProductThunk, deleteProductThunk } from '../../redux/reducer/ProductSlice';
import style from "./admin.module.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const { aranoz, loading, error } = useSelector((state) => state.aranoz);



  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      image: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().min(2).max(50).required(),
      price: Yup.number().required(),
      image: Yup.string().required(),
    }),


    onSubmit: async (values) => {
      await dispatch(postProductThunk(values));
      formik.resetForm();
    },
  });

  const handleDelete = async (id) => {
    await dispatch(deleteProductThunk(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>

      <div className={style.title}>
        <h1>Admin</h1>
      </div>


      <form onSubmit={formik.handleSubmit} className={style.form}>
        <input name="title" placeholder="Title" onChange={formik.handleChange} value={formik.values.title} required />
        <input name="price" type="number" placeholder="Price" onChange={formik.handleChange} value={formik.values.price} required />
        <input name="image" placeholder="Image URL" onChange={formik.handleChange} value={formik.values.image} required />
        <button type="submit">Submit</button>
      </form>


      <div className={style.products}>
        {aranoz && aranoz.map((item) => (
          <div className={style.product} key={item._id}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>$ {item.price}</p>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Admin;
