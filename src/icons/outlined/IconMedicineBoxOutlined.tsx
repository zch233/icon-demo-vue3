// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MedicineBoxOutlinedSvg from 'icon-base/es/asn/MedicineBoxOutlined';

export interface MedicineBoxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMedicineBoxOutlined: MedicineBoxOutlinedIconType = (props, context) => (
    <Icon name='MedicineBoxOutlined' {...{ ...props, ...context.attrs }} icon={MedicineBoxOutlinedSvg} />
);

IconMedicineBoxOutlined.displayName = 'IconMedicineBoxOutlined';
IconMedicineBoxOutlined.theme = 'outlined';
IconMedicineBoxOutlined.originName = 'medicine-box';

export default IconMedicineBoxOutlined;
