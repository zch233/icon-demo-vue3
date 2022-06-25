// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MedicineBoxTwoToneSvg from 'icon-base/es/asn/MedicineBoxTwoTone';

export interface MedicineBoxTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMedicineBoxTwoTone: MedicineBoxTwoToneIconType = (props, context) => (
    <Icon name='MedicineBoxTwoTone' {...{ ...props, ...context.attrs }} icon={MedicineBoxTwoToneSvg} />
);

IconMedicineBoxTwoTone.displayName = 'IconMedicineBoxTwoTone';
IconMedicineBoxTwoTone.theme = 'twotone';
IconMedicineBoxTwoTone.originName = 'medicine-box';

export default IconMedicineBoxTwoTone;
