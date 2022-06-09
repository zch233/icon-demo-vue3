// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';

export interface DingdingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DingdingOutlined: DingdingOutlinedIconType = (props, context) => <Icon name='DingdingOutlined' {...{ ...props, ...context.attrs }} icon={DingdingOutlinedSvg} />;

DingdingOutlined.displayName = 'DingdingOutlined';

export default DingdingOutlined;