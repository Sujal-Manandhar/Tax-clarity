<?php
/**
 * Template part for displaying the Contact section
 * 
 * CMS Editable via ACF (planned)
 */

$contact_headline = taxcare_get_field('contact_headline') ?: 'Send Us a Message';
$contact_subheadline = taxcare_get_field('contact_subheadline') ?: 'Fill out the form below and we\'ll get back to you within 24 hours.';

$services = [
    'Tax Filing & Returns',
    'VAT Registration & Compliance',
    'Accounting & Bookkeeping',
    'Company Registration',
    'PAN / VAT Registration',
    'Audit & Financial Advisory',
    'Payroll & Compliance',
    'Other',
];
?>

<div class="animate-on-scroll visible">
    <div class="mb-6">
        <h2 class="mb-2 text-2xl text-center font-bold text-foreground">
            <?php echo esc_html($contact_headline); ?>
        </h2>
        <p class="text-muted-foreground text-center">
            <?php echo esc_html($contact_subheadline); ?>
        </p>
    </div>

    <form id="contact-form" class="space-y-6 rounded-2xl border border-border bg-card p-8">
        <div class="grid gap-6 md:grid-cols-2">
            <div>
                <label for="name" class="mb-2 block text-sm font-medium text-foreground">
                    Full Name *
                </label>
                <input id="name" type="text" required placeholder="Your name" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            </div>
            <div>
                <label for="email" class="mb-2 block text-sm font-medium text-foreground">
                    Email *
                </label>
                <input id="email" type="email" required placeholder="your@email.com" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
            <div>
                <label for="phone" class="mb-2 block text-sm font-medium text-foreground">
                    Phone Number *
                </label>
                <input id="phone" type="tel" required placeholder="+977 98XXXXXXXX" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            </div>
            <div>
                <label for="service" class="mb-2 block text-sm font-medium text-foreground">
                    Service Needed *
                </label>
                <select id="service" required class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Select a service</option>
                    <?php foreach ($services as $service) : ?>
                        <option value="<?php echo esc_attr($service); ?>"><?php echo esc_html($service); ?></option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>

        <div>
            <label for="message" class="mb-2 block text-sm font-medium text-foreground">
                Message
            </label>
            <textarea id="message" placeholder="Tell us about your needs..." rows="4" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
        </div>

        <button type="submit" class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
            Send Message
        </button>

        <p class="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock h-4 w-4"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Your information stays confidential.
        </p>
    </form>
</div>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent(`Enquiry from ${name} — ${service}`);
    const body = encodeURIComponent(
        `Hello TaxCare Nepal,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service Needed: ${service}\n\n` +
        `Message:\n${message}`
    );

    window.location.href = `mailto:info@TaxCare.com.np?subject=${subject}&body=${body}`;
});
</script>
