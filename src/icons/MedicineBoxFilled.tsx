// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';

export interface MedicineBoxFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MedicineBoxFilled: MedicineBoxFilledIconType = (props, context) => <Icon name='MedicineBoxFilled' {...{ ...props, ...context.attrs }} icon={MedicineBoxFilledSvg} />;

MedicineBoxFilled.displayName = 'MedicineBoxFilled';

export default MedicineBoxFilled;