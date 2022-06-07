// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import FullscreenExitOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenExitOutlined';

export interface FullscreenExitOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FullscreenExitOutlined: FullscreenExitOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={FullscreenExitOutlinedSvg} />
    ;

FullscreenExitOutlined.displayName = 'FullscreenExitOutlined';

export default FullscreenExitOutlined;