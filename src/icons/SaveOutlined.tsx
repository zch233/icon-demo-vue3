// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';

export interface SaveOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SaveOutlined: SaveOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SaveOutlinedSvg} />
    ;

SaveOutlined.displayName = 'SaveOutlined';

export default FunctionalComponent;