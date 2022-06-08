// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled';

export interface FilePptFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FilePptFilled: FilePptFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FilePptFilledSvg} />;

FilePptFilled.displayName = 'FilePptFilled';

export default FunctionalComponent;