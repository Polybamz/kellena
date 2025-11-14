import * as React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { createVolunteer } from '../../../firebase';
import { useToast } from '@/hooks/use-toast';

// --- Type Definitions ---
/**
 * Defines the structure for a volunteer object.
 */
type ActionType = 'volunteer' | 'partner'
export type VolunteerType = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    skills: string[];
    interests: string[];
    availability: string[];
    languages: string[];
    notes: string;
    createdAt: string;
};

/**
 * Props for the AddVolunteerModal component.
 */
interface AddVolunteerModalProps {
    open: boolean;
    onClose: () => void;
    onVolunteerAdded: (data: VolunteerType) => void;
    title: string;
    type: ActionType
}

// --- Initial State for Form Data ---
const initialFormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    skills: [],
    interests: [],
    availability: [],
    languages: [],
    notes: '',
    createdAt: new Date().toISOString(), // Use ISO string for consistency
};

const AddVolunteerModal: React.FC<AddVolunteerModalProps> = ({ open, onClose, onVolunteerAdded, title }) => {
    const [formData, setFormData] = React.useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const { toast } = useToast();

    // Reset form state when the modal opens
    React.useEffect(() => {
        if (open) {
            setFormData(initialFormData);
            setIsSubmitting(false);
        }
    }, [open]);

    /**
     * Handles changes for text inputs.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    /**
     * Handles changes for multi-select fields (skills, interests, etc.).
     * This example simplifies by using a comma-separated string,
     * but for a real app, you would use a dedicated multi-select component.
     */
    const handleArrayChange = (name: keyof VolunteerType, value: string) => {
        const arrayValue = value.split(',').map(item => item.trim());
        setFormData(prev => ({ ...prev, [name]: arrayValue }));
    };

    /**
     * Handles the submission of the form.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic client-side validation
        if (!formData.name || !formData.email || !formData.phone) {
            toast({
                title: "Validation Error",
                description: "Please fill in the required fields: Name, Email, and Phone.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await createVolunteer(formData);

            if (result.success) {
                toast({
                    title: "Success",
                    description: "Volunteer successfully registered!",
                    variant: "default",
                });
                onVolunteerAdded(formData);
                onClose();
            } else {
                toast({
                    title: "Submission Failed",
                    description: result.message || 'An error occurred while registering the volunteer.',
                    variant: "destructive",
                });
            }
        } catch (dbError: any) {
            console.error("Firebase volunteer creation error:", dbError);
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-xl bg-white max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800">{title}</DialogTitle>
                </DialogHeader>

                <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                    {/* Personal Information Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} type="text" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" required />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" required />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" name="address" value={formData.address} onChange={handleChange} type="text" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="city">City</Label>
                                <Input id="city" name="city" value={formData.city} onChange={handleChange} type="text" />
                            </div>
                            <div>
                                <Label htmlFor="state">State</Label>
                                <Input id="state" name="state" value={formData.state} onChange={handleChange} type="text" />
                            </div>
                            <div>
                                <Label htmlFor="zip">ZIP Code</Label>
                                <Input id="zip" name="zip" value={formData.zip} onChange={handleChange} type="text" />
                            </div>
                        </div>
                    </div>

                    {/* Skills and Interests Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Skills and Interests</h3>
                        <div>
                            <Label htmlFor="skills">Skills (comma-separated)</Label>
                            <Input id="skills" name="skills" value={formData.skills.join(', ')} onChange={(e) => handleArrayChange('skills', e.target.value)} type="text" placeholder="e.g., event planning, social media, photography" />
                        </div>
                        <div>
                            <Label htmlFor="interests">Areas of Interest (comma-separated)</Label>
                            <Input id="interests" name="interests" value={formData.interests.join(', ')} onChange={(e) => handleArrayChange('interests', e.target.value)} type="text" placeholder="e.g., environment, education, community outreach" />
                        </div>
                        <div>
                            <Label htmlFor="languages">Languages Spoken (comma-separated)</Label>
                            <Input id="languages" name="languages" value={formData.languages.join(', ')} onChange={(e) => handleArrayChange('languages', e.target.value)} type="text" placeholder="e.g., English, French, Spanish" />
                        </div>
                    </div>

                    {/* Availability and Notes */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Additional Information</h3>
                        <div>
                            <Label htmlFor="availability">Availability (e.g., Weekends, Evenings)</Label>
                            <Input id="availability" name="availability" value={formData.availability.join(', ')} onChange={(e) => handleArrayChange('availability', e.target.value)} type="text" placeholder="e.g., Weekends, Weekdays (Mornings)" />
                        </div>
                        <div>
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="Any additional information you'd like to share..." />
                        </div>
                    </div>

                    <DialogFooter className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>Cancel</Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin inline-block mr-2">&#9696;</span>
                                    Submitting...
                                </>
                            ) : (
                                'Register'
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddVolunteerModal;