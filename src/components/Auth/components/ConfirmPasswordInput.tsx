import React from "react";

function ConfirmPasswordInput({
  confirmPassword,
  handleConfirmPassword,
  errors,
}) {
  return (
    <div className="form-group flex flex-col">
      <label htmlFor="confirmPassword" className="pr-4 font-semibold mb-2">
        Confirm password
      </label>
      <input
        type="password"
        id="confirm-password"
        required
        value={confirmPassword}
        className="bg-white border-[0.5px] w-[16rem]"
        onChange={handleConfirmPassword}
      />
      {errors.confirmPassword && <p className="">{errors.confirmPassword}</p>}
    </div>
  );
}

export default ConfirmPasswordInput;
