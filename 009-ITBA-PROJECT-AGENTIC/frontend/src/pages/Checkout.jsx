import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const shippingSchema = z.object({
  fullName: z.string().min(3, 'El nombre es obligatorio'),
  email: z.string().email('Ingresá un email válido'),
  address: z.string().min(5, 'La dirección de entrega es muy corta'),
  city: z.string().min(1, 'La ciudad es obligatoria'),
  zipCode: z.string().regex(/^\d{4}$/, 'El código postal debe tener 4 números'),
});

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500';

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert('Pedido procesado con éxito');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-md md:p-8">
        <h1 className="font-serif text-2xl text-gray-800">Datos de envío</h1>
        <p className="mt-1 mb-6 text-sm text-gray-500">
          Completá tus datos para coordinar la entrega de tus muebles.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className={inputClassName}
              {...register('fullName')}
            />
            {errors.fullName && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClassName}
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Dirección
            </label>
            <input
              id="address"
              type="text"
              autoComplete="street-address"
              className={inputClassName}
              {...register('address')}
            />
            {errors.address && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="city"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Ciudad
              </label>
              <input
                id="city"
                type="text"
                autoComplete="address-level2"
                className={inputClassName}
                {...register('city')}
              />
              {errors.city && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Código postal
              </label>
              <input
                id="zipCode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={4}
                className={inputClassName}
                {...register('zipCode')}
              />
              {errors.zipCode && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.zipCode.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 py-2.5 font-medium text-white hover:bg-gray-800"
          >
            Confirmar pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
