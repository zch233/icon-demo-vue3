// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ShareAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined';

export interface ShareAltOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ShareAltOutlined: ShareAltOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ShareAltOutlinedSvg} />
    ;

ShareAltOutlined.displayName = 'ShareAltOutlined';

export default FunctionalComponent;