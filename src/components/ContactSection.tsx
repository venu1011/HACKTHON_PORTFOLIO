
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    // --- EmailJS Integration ---
    // IMPORTANT: Replace with your actual EmailJS credentials.
    // It's best to store these in environment variables.
    // For Vite, use `import.meta.env.VITE_EMAILJS_...`
    // For Next.js, use `process.env.NEXT_PUBLIC_EMAILJS_...`
    const serviceID = 'service_be1i12j';
    const templateID = 'template_3czsn5i';
    const publicKey = 'sgfsjr5ParLiYlJTd';
    
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log('EmailJS Success:', result.text);
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form on success
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      }).finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'venushanumgham@gmail.com',
      href: 'mailto:venushanumgham@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9676370271',
      href: 'tel:+919676370271',
      color: 'neon-purple'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Tirupathi, AP',
      href: '',
      color: 'neon-pink'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-${item.color}/20 text-${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-card rounded-xl text-muted-foreground hover:text-neon-blue transition-all duration-300 hover:shadow-lg"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neon-blue">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-muted/20 border-muted/30 focus:border-neon-blue transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neon-blue">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-muted/20 border-muted/30 focus:border-neon-blue transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neon-blue">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-muted/20 border-muted/30 focus:border-neon-blue transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neon-blue">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-muted/20 border-muted/30 focus:border-neon-blue transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cyber-button py-6 text-lg font-semibold"
                  disabled={isSending}
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
