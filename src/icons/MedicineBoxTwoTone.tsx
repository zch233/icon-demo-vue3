// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MedicineBoxTwoToneSvg from '@ant-design/icons-svg/lib/asn/MedicineBoxTwoTone';

export interface MedicineBoxTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MedicineBoxTwoTone: MedicineBoxTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MedicineBoxTwoToneSvg} />
    ;

MedicineBoxTwoTone.displayName = 'MedicineBoxTwoTone';

export default FunctionalComponent;