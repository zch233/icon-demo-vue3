// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone';

export interface PictureTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const PictureTwoTone: PictureTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={PictureTwoToneSvg} />
    ;

PictureTwoTone.displayName = 'PictureTwoTone';

export default FunctionalComponent;