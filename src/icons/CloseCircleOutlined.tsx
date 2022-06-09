// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';

export interface CloseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloseCircleOutlined: CloseCircleOutlinedIconType = (props, context) => <Icon name='CloseCircleOutlined' {...{ ...props, ...context.attrs }} icon={CloseCircleOutlinedSvg} />;

CloseCircleOutlined.displayName = 'CloseCircleOutlined';

export default CloseCircleOutlined;