// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MedicineBoxOutlinedSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxOutlined';

export interface MedicineBoxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MedicineBoxOutlined: MedicineBoxOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MedicineBoxOutlinedSvg} />;

MedicineBoxOutlined.displayName = 'MedicineBoxOutlined';

export default FunctionalComponent;