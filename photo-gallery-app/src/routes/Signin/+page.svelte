<script>
  import { invalidate } from '$app/navigation';
  let password = '';
  let error = '';

  async function login(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const res = await fetch('/Signin', {
      method: 'POST',
      body: formData
    });
    if (res.ok) {
      error = '';
      // Refresh session or redirect:
      window.location.href = '/Admin';
    } else {
      error = 'Incorrect password';
    }
  }
</script>

<form on:submit={login}>
  <label>
    Password
    <input type="password" name="password" bind:value={password} required />
  </label>
  <button type="submit">Login</button>
</form>
{#if error}
  <p style="color: red">{error}</p>
{/if}

