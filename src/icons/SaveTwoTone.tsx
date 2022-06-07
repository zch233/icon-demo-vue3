// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SaveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveTwoTone';

export interface SaveTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SaveTwoTone: SaveTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SaveTwoToneSvg} />
    ;

SaveTwoTone.displayName = 'SaveTwoTone';

export default FunctionalComponent;