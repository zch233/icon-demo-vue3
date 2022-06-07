// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MedicineBoxFilledSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxFilled';

export interface MedicineBoxFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MedicineBoxFilled: MedicineBoxFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MedicineBoxFilledSvg} />
    ;

MedicineBoxFilled.displayName = 'MedicineBoxFilled';

export default FunctionalComponent;